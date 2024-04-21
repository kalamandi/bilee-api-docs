const shop_id = 1;
const password = "SHOP_PASSWORD";

(async () => {
  const data = {
    order_id: "65754fb5-b001-47bf-a608-7333256e2abe",
    shop_id,
  };

  data.signature = await generateSignature(data, password); // пример функции см. в разделе введение

  const res = await axios.post(
    "https://paymentgate.bilee.ru/api/payment/getOrder",
    data
  );

  console.log(res.data);
})();
