using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch4.Collections.TypedArrays
{
    [TestFixture(TestNameFormat = "Uint32ArrayTests - {0}")]
    public class Uint32ArrayTests
    {
        private void AssertContent(Uint32Array actual, int[] expected, string message)
        {
            if (actual.Length != expected.Length)
            {
                Assert.Fail(message + ": Expected length " + expected.Length + ", actual: " + actual.Length);
                return;
            }
            for (int i = 0; i < expected.Length; i++)
            {
                if (actual[i] != expected[i])
                {
                    Assert.Fail(message + ": Position " + i + ": expected " + expected[i] + ", actual: " + actual[i]);
                    return;
                }
            }
            Assert.True(true, message);
        }

        [Test]
        public void TypePropertiesAreCorrect_SPI_1559()
        {
            Assert.AreEqual("Uint32Array", typeof(Uint32Array).FullName, "FullName");

            var interfaces = typeof(Uint32Array).GetInterfaces();
            Assert.AreEqual(7, interfaces.Length, "Interface count should be 7");
            Assert.True(interfaces.Contains(typeof(IEnumerable<uint>)), "Interfaces should contain IEnumerable<uint>");
            Assert.True(interfaces.Contains(typeof(ICollection<uint>)), "Interfaces should contain ICollection<uint>");
            Assert.True(interfaces.Contains(typeof(IList<uint>)), "Interfaces should contain IList<uint>");
            // Not JS API
            //Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<uint>)), "Interfaces should contain IReadOnlyCollection<uint>");
            //Assert.True(interfaces.Contains(typeof(IReadOnlyList<uint>)), "Interfaces should contain IReadOnlyList<uint>");

            object arr = new Uint32Array(0);
            Assert.True(arr is Uint32Array, "Is Uint32Array");
            Assert.True(arr is IEnumerable<uint>, "Is IEnumerable<uint>");
            Assert.True(arr is ICollection<uint>, "Is ICollection<uint>");
            Assert.True(arr is IList<uint>, "Is IList<uint>");
            // Not JS API
            //Assert.True(arr is IReadOnlyCollection<uint>, "Is IReadOnlyCollection<uint>");
            //Assert.True(arr is IReadOnlyList<uint>, "Is IReadOnlyList<uint>");
        }

        [Test]
        public void LengthConstructorWorks()
        {
            var arr = new Uint32Array(13);
            Assert.True((object)arr is Uint32Array, "is Uint32Array");
            Assert.AreEqual(13, arr.Length, "Length");
        }

        [Test]
        public void ConstructorFromIntWorks()
        {
            var source = new uint[] { 3, 8, 4 };
            var arr = new Uint32Array(source);
            Assert.True((object)arr != (object)source, "New object");
            Assert.True((object)arr is Uint32Array, "is Uint32Array");
            AssertContent(arr, new[] { 3, 8, 4 }, "content");
        }

        [Test]
        public void CopyConstructorWorks()
        {
            var source = new Uint32Array(new uint[] { 3, 8, 4 });
            var arr = new Uint32Array(source);
            Assert.True(arr != source, "New object");
            Assert.True((object)arr is Uint32Array, "is Uint32Array");
            AssertContent(arr, new[] { 3, 8, 4 }, "content");
        }

        [Test]
        public void ArrayBufferConstructorWorks()
        {
            var buf = new ArrayBuffer(80);
            var arr = new Uint32Array(buf);
            Assert.True((object)arr is Uint32Array);
            Assert.True(arr.Buffer == buf, "buffer");
            Assert.AreEqual(20, arr.Length, "length");
        }

        [Test]
        public void ArrayBufferWithOffsetConstructorWorks()
        {
            var buf = new ArrayBuffer(80);
            var arr = new Uint32Array(buf, 16);
            Assert.True((object)arr is Uint32Array);
            Assert.True(arr.Buffer == buf, "buffer");
            Assert.AreEqual(16, arr.Length, "length");
        }

        [Test]
        public void ArrayBufferWithOffsetAndLengthConstructorWorks()
        {
            var buf = new ArrayBuffer(80);
            var arr = new Uint32Array(buf, 16, 12);
            Assert.True((object)arr is Uint32Array);
            Assert.True(arr.Buffer == buf, "buffer");
            Assert.AreEqual(12, arr.Length, "length");
        }

        // Not JS API
        //[Test]
        //public void InstanceBytesPerElementWorks()
        //{
        //    Assert.AreEqual(new Uint32Array(0).BytesPerElement, 4);
        //}

        [Test]
        public void StaticBytesPerElementWorks()
        {
            Assert.AreEqual(4, Uint32Array.BYTES_PER_ELEMENT);
        }

        [Test]
        public void LengthWorks()
        {
            var arr = new Uint32Array(13);
            Assert.AreEqual(13, arr.Length, "Length");
        }

        [Test]
        public void IndexingWorks()
        {
            var arr = new Uint32Array(3);
            arr[1] = 42;
            AssertContent(arr, new[] { 0, 42, 0 }, "Content");
            Assert.AreEqual(42, arr[1], "[1]");
        }

        [Test]
        public void SetUint32ArrayWorks()
        {
            var arr = new Uint32Array(4);
            arr.Set(new Uint32Array(new uint[] { 3, 6, 7 }));
            AssertContent(arr, new[] { 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SetUint32ArrayWithOffsetWorks()
        {
            var arr = new Uint32Array(6);
            arr.Set(new Uint32Array(new uint[] { 3, 6, 7 }), 2);
            AssertContent(arr, new[] { 0, 0, 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SetNormalArrayWorks()
        {
            var arr = new Uint32Array(4);
            arr.Set(new uint[] { 3, 6, 7 });
            AssertContent(arr, new[] { 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SetNormalArrayWithOffsetWorks()
        {
            var arr = new Uint32Array(6);
            arr.Set(new uint[] { 3, 6, 7 }, 2);
            AssertContent(arr, new[] { 0, 0, 3, 6, 7, 0 }, "Content");
        }

        [Test]
        public void SubarrayWithBeginWorks()
        {
            var source = new Uint32Array(10);
            var arr = source.SubArray(3);
            Assert.False(arr == source, "Should be a new array");
            Assert.True(arr.Buffer == source.Buffer, "Should be the same buffer");
            Assert.AreEqual(12, arr.ByteOffset, "ByteOffset should be correct");
        }

        [Test]
        public void SubarrayWithBeginAndEndWorks()
        {
            var source = new Uint32Array(10);
            var arr = source.SubArray(3, 7);
            Assert.False(arr == source, "Should be a new array");
            Assert.True(arr.Buffer == source.Buffer, "Should be the same buffer");
            Assert.AreEqual(12, arr.ByteOffset, "ByteOffset should be correct");
            Assert.AreEqual(4, arr.Length, "Length should be correct");
        }

        [Test]
        public void BufferPropertyWorks()
        {
            var buf = new ArrayBuffer(100);
            var arr = new Uint32Array(buf);
            Assert.True(arr.Buffer == buf, "Should be correct");
        }

        [Test]
        public void ByteOffsetPropertyWorks()
        {
            var buf = new ArrayBuffer(100);
            var arr = new Uint32Array(buf, 32);
            Assert.AreEqual(32, arr.ByteOffset, "Should be correct");
        }

        [Test]
        public void ByteLengthPropertyWorks()
        {
            var arr = new Uint32Array(23);
            Assert.AreEqual(92, arr.ByteLength, "Should be correct");
        }

        [Test]
        public void IndexOfWorks()
        {
            var arr = new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            Assert.AreEqual(3, arr.IndexOf(9), "9");
            Assert.AreEqual(-1, arr.IndexOf(1), "1");
        }

        // Not JS API
        [Test]
        public void ContainsWorks()
        {
            var arr = new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            Assert.True(arr.Contains(9), "9");
            Assert.False(arr.Contains(1), "1");
        }

        // #SPI
        [Test]
        public void ForeachWorks_SPI_1401()
        {
            var arr = new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            var l = new List<uint>();
            // #1401
            foreach (var i in arr)
            {
                l.Add(i);
            }
            Assert.AreEqual(l.ToArray(), new[] { 3, 6, 2, 9, 5 });
        }

        // #SPI
        [Test]
        public void GetEnumeratorWorks_SPI_1401()
        {
            var arr = new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            var l = new List<uint>();
            // #1401
            var enm = arr.GetEnumerator();
            while (enm.MoveNext())
            {
                l.Add(enm.Current);
            }
            Assert.AreEqual(l.ToArray(), new[] { 3, 6, 2, 9, 5 });
        }

        [Test]
        public void IEnumerableGetEnumeratorWorks()
        {
            var arr = (IEnumerable<uint>)new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            var l = new List<uint>();
            var enm = arr.GetEnumerator();
            while (enm.MoveNext())
            {
                l.Add(enm.Current);
            }
            Assert.AreEqual(new[] { 3, 6, 2, 9, 5 }, l.ToArray());
        }

        [Test]
        public void ICollectionMethodsWork_SPI_1559()
        {
            // #1559
            var coll = (ICollection<uint>)new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            Assert.AreEqual(5, coll.Count, "Count");
            Assert.True(coll.Contains(6), "Contains(6)");
            Assert.False(coll.Contains(1), "Contains(1)");
            Assert.Throws<NotSupportedException>(() => coll.Add(2), "Add");
            Assert.Throws<NotSupportedException>(() => coll.Clear(), "Clear");
            Assert.Throws<NotSupportedException>(() => coll.Remove(2), "Remove");
        }

        [Test]
        public void IListMethodsWork_SPI_1559()
        {
            // #1559
            var list = (IList<uint>)new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
            Assert.AreEqual(1, list.IndexOf(6), "IndexOf(6)");
            Assert.AreEqual(-1, list.IndexOf(1), "IndexOf(1)");
            Assert.AreEqual(9, list[3], "Get item");
            list[3] = 4;
            Assert.AreEqual(4, list[3], "Set item");

            Assert.Throws<NotSupportedException>(() => list.Insert(2, 2), "Insert");
            Assert.Throws<NotSupportedException>(() => list.RemoveAt(2), "RemoveAt");
        }

        // Not JS API
        //[Test]
        //public void IReadOnlyCollectionMethodsWork()
        //{
        //    var coll = (IReadOnlyCollection<uint>)new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
        //    Assert.AreEqual(coll.Count, 5, "Count");
        //    Assert.True(coll.Contains(6), "Contains(6)");
        //    Assert.False(coll.Contains(1), "Contains(1)");
        //}

        // Not JS API
        //[Test]
        //public void IReadOnlyListMethodsWork()
        //{
        //    var list = (IReadOnlyList<uint>)new Uint32Array(new uint[] { 3, 6, 2, 9, 5 });
        //    Assert.AreEqual(list[3], 9, "Get item");
        //}
    }
}