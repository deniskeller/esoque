import axios from "axios";

import { MediaStore, MediaUploadOptions, Media, MediaList } from "tinacms";
import { API_URL, IMG_STORAGE } from "@utils/helpers";

const uploadFile = ({ file, page, lang }: UploadFile) => {
  const formData = new FormData();
  formData.append("files", file);

  return axios
    .post(`${API_URL}/api/upload-static/${page}_${lang}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res.data[0];
    });
};

const listFiles = ({ page, lang }: ListFiles) => {
  return axios
    .get(`${API_URL}/api/upload-static?folder=${page}_${lang}`)
    .then((res) => {
      if (res.status !== 200) {
        // throw new Error("Ошибка!");
        return [];
      }

      return res.data;
    })
    .catch((err) => [{}]);
};

const deleteFile = ({ fileID }: DeleteFile) => {
  return axios
    .delete(`${API_URL}/api/upload-static/${fileID}`)
    .then((res) => {
      if (res.status !== 200) {
        console.log("error delete file");
      }
      return res.data;
    })
    .catch((err) => [{}]);
};

export class MDMediaStore implements MediaStore {
  accept = "image/jpg,image/jpeg";

  private pageName;
  private langName;

  constructor({ page, lang }: ConstructorProps) {
    this.pageName = page;
    this.langName = lang;
  }

  persist(files: MediaUploadOptions[]): Promise<Media[]> {
    return uploadFile({
      file: files[0].file,
      page: this.pageName,
      lang: this.langName,
    }).then((result) => {
      const splittedName = result.url.split("/");
      const parsedName = splittedName[splittedName.length - 1];

      const medaData = {
        type: "file",
        id: result.id,
        directory: "",
        filename: parsedName,
        previewSrc: `${IMG_STORAGE}/api/${result.url}`,
      } as Media;
      return [medaData];
    });
  }

  previewSrc(src: any) {
    return src.previewSrc;
  }

  list(): Promise<MediaList> {
    return listFiles({ page: this.pageName, lang: this.langName }).then(
      (data) => {
        if (!data.length) {
          return {
            items: [],
            limit: 0,
            offset: 0,
            totalCount: 0,
          };
        }

        return {
          items: data.map((item: ListItem) => {
            const splittedName = item.url.split("/");
            const parsedName = splittedName[splittedName.length - 1];

            return {
              type: "file",
              id: item.id,
              directory: "/images/",
              filename: parsedName,
              previewSrc: item.url,
            };
          }),
          limit: data.length,
          offset: 0,
          totalCount: data.length,
        };
      }
    );
  }

  delete(media: Media) {
    return deleteFile({ fileID: media.id });
  }
}
interface ListItem {
  date: string;
  id: number;
  target: string;
  type: string;
  url: string;
}

interface UploadFile {
  file: File;
  page: string;
  lang: string;
}

interface ListFiles {
  page: string;
  lang: string;
}

interface DeleteFile {
  fileID: string;
}

interface ConstructorProps {
  lang: string;
  page: string;
}

interface PreviewSrc {
  directory: string;
  filename: string;
  id: number;
  previewSrc: string;
  type: string;
}
