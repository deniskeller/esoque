import React from "react";

import { useForm, usePlugin, useCMS } from "tinacms";
import { InlineForm, InlineBlocks } from "react-tinacms-inline";

interface Props {
  blockSchema: any;
  data: any;
  pageName: string;
}

export const TinaPageWrapper: React.FC<Props> = ({
  blockSchema,
  data,
  pageName,
}) => {
  const cms = useCMS();

  const formConfig = {
    id: pageName,
    initialValues: data,

    onSubmit: async (content: any) => {
      try {
        console.log(content, "content save");
        cms.alerts.success("Сохранено!");
      } catch (err) {
        cms.alerts.error("Ошибка сети!");
      }
    },
    label: "Page",
  };

  const [pdata, form] = useForm(formConfig);
  usePlugin(form);

  return (
    <>
      <InlineForm form={form}>
        <InlineBlocks name="blocks" blocks={blockSchema} />
      </InlineForm>
    </>
  );
};
