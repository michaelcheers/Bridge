using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2401 - {0}")]
    public class Bridge2472
    {
        [Test]
        public static void AbsTests()
        {
            Assert.AreEqual((sbyte)7, Math.Abs((sbyte)-7));
            Assert.AreEqual((sbyte)7, Math.Abs((sbyte)7));
            Assert.AreEqual((short)0, Math.Abs((short)-7));
            Assert.AreEqual((short)7, Math.Abs((short)7));
            Assert.AreEqual(7, Math.Abs(-7));
            Assert.AreEqual(7, Math.Abs(7));
            Assert.AreEqual(7f, Math.Abs(-7f));
            Assert.AreEqual(7f, Math.Abs(7f));
            Assert.AreEqual(7d, Math.Abs(-7d));
            Assert.AreEqual(7d, Math.Abs(7d));
            Assert.AreEqual(7L, Math.Abs(-7L));
            Assert.AreEqual(7L, Math.Abs(7L));
            Assert.AreEqual(7m, Math.Abs(-7m));
            Assert.AreEqual(7m, Math.Abs(7m));
            Assert.AreEqual((sbyte)0, Math.Abs((sbyte)-0));
            Assert.AreEqual((sbyte)0, Math.Abs((sbyte)0));
            Assert.AreEqual((short)0, Math.Abs((short)-0));
            Assert.AreEqual((short)0, Math.Abs((short)0));
            Assert.AreEqual(0, Math.Abs(-0));
            Assert.AreEqual(0, Math.Abs(0));
            Assert.AreEqual(0f, Math.Abs(-0f));
            Assert.AreEqual(0f, Math.Abs(0f));
            Assert.AreEqual(0d, Math.Abs(-0d));
            Assert.AreEqual(0d, Math.Abs(0d));
            Assert.AreEqual(0L, Math.Abs(-0L));
            Assert.AreEqual(0L, Math.Abs(0L));
            Assert.AreEqual(0m, Math.Abs(-0m));
            Assert.AreEqual(0m, Math.Abs(0m));
        }
    }
}