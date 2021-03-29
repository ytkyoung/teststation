function doubledPay(n) {
  return 2 ** n - 1;
}

const result = doubledPay(6);
console.log(result);

// Test.assertEquals(doubledPay(1), 1)
// Test.assertEquals(doubledPay(2), 3)
// Test.assertEquals(doubledPay(3), 7)
// Test.assertEquals(doubledPay(4), 15)
// Test.assertEquals(doubledPay(5), 31)
// Test.assertEquals(doubledPay(6), 63)
// Test.assertEquals(doubledPay(7), 127)
// Test.assertEquals(doubledPay(8), 255)
// Test.assertEquals(doubledPay(9), 511)
// Test.assertEquals(doubledPay(10), 1023)
// Test.assertEquals(doubledPay(11), 2047)
// Test.assertEquals(doubledPay(12), 4095)
// Test.assertEquals(doubledPay(13), 8191)
// Test.assertEquals(doubledPay(14), 16383)
// Test.assertEquals(doubledPay(15), 32767)
// Test.assertEquals(doubledPay(16), 65535)
// Test.assertEquals(doubledPay(17), 131071)
// Test.assertEquals(doubledPay(18), 262143)
// Test.assertEquals(doubledPay(19), 524287)
// Test.assertEquals(doubledPay(20), 1048575)
// Test.assertEquals(doubledPay(21), 2097151)
// Test.assertEquals(doubledPay(22), 4194303)
// Test.assertEquals(doubledPay(59), 576460752303423487)
// Test.assertEquals(doubledPay(66), 73786976294838206463)
// Test.assertEquals(doubledPay(35), 34359738367)
// Test.assertEquals(doubledPay(73), 9444732965739290427391)
// Test.assertEquals(doubledPay(105), 40564819207303340847894502572031)
