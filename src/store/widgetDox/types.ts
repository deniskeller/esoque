export type IWidgetDox = {
  tabName: string;
  copycert: {
    OrderList: {
      pricelist_id: string;
      type: string;
      ItemList: { id: string; quantity: string }[];
    };
    Data: {
      price: number;
      quantity: number;
      totalPrice: string;
      services: SelecetedValue;
    };
  };
  signcert: {
    OrderList: {
      pricelist_id: string;
      type: string;
      ItemList: { id: string; quantity: string }[];
    };
    Data: {
      price: number;
      quantity: number;
      totalPrice: string;
      services: SelecetedValue;
    };
  };
  corpdoc: {
    Company: {
      jurisdiction_ident: string;
      name: string;
      number: string;
    };
    OrderList: {
      pricelist_id: string;
      type: string;
      ItemList: { id: string; quantity: string }[];
    };
    Data: {
      juristdiction: string;
      companyName: string;
      totalPrice: string;
      services: SelecetedValue;
    };
  };
  corpdocOffline: {
    Data: {
      juristdiction: string;
      companyName: string;
      totalPrice: string;
      services: SelecetedValue;
    };
  };
};

type SelecetedValue = {
  ItemList?: ServiceOption[];
  description?: string;
  description_ru?: string;
  id?: string;
  name?: string;
  name_ru?: string;
  type?: string;
};

type ServiceOption = {
  description: string;
  description_ru?: string;
  id: string;
  name: string;
  name_ru?: string;
  price: string;
  price_available: string;
  price_request: string;
  price_unit: string;
  quantity_max: string;
  quantity_min: string;
  type: string;
};
