type PriceListData = [
  {
    id: string;
    name: string;
    name_ru: string;
    description: string;
    description_ru: string;
    type: string;
    quantity_min: string;
    quantity_max: string;
    price: string;
    price_unit: string;
    price_available: string;
    price_request: string;
  }
];

type FormatOptions = [{ value: string; title: string }];

export const formatsOptionsData = (data: PriceListData | []) => {
  const res: FormatOptions | any = [];

  data.forEach((element) => {
    res.push({ value: element.id, title: element.name });
  });

  if (!res.length) {
    res.push({ title: "No data", value: "" });
  }

  return res;
};
