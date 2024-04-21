const shop_id = 1;
const password = "SHOP_PASSWORD";

(async () => {
  const data = {
    id: 12387,
    shop_id,
  };

  data.signature = await generateSignature(data, password); // пример функции см. в разделе введение

  const res = await axios.post(
    "https://paymentgate.bilee.ru/api/payment/getState",
    data
  );

  console.log(res.data);
})();
