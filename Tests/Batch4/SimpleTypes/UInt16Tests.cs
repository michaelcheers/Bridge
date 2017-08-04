using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "UInt16Tests - {0}")]
    public class UInt16Tests
    {
        [Test]
        public void TryParseWorks_SPI_1592()
        {
            ushort numberResult;
            var result = ushort.TryParse("-1", out numberResult);
            // #1592
            Assert.AreEqual(0, numberResult);
        }
    }
}