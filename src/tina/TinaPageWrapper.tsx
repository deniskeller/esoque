import React from "react";

import { useForm, usePlugin, useCMS } from "tinacms";
import { InlineForm, InlineBlocks } from "react-tinacms-inline";

import { setContent } from "@api/content";
interface Props {
  blockSchema: any;
  data: {
    blocks: { [key: string]: string | { [key: string]: string | number }[] }[];
  };
  page: string;
  lang: string;
}

interface Content {
  blocks: { [key: string]: string | { [key: string]: string }[] }[];
}

export const TinaPageWrapper: React.FC<Props> = ({
  blockSchema,
  data,
  page,
  lang,
}) => {
  const cms = useCMS();

  const formConfig = {
    id: page,
    initialValues: data,

    onSubmit: async (content: Content) => {
      try {
        const status = await setContent({ page, lang, content });
        if (status) {
          cms.alerts.success("Сохранено!");
        } else {
          throw new Error("Error onSubmit setContent");
        }
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
