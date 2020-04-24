import axios from 'axios';

export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axiosを使ってthenのコールバック関数でresponseを受け取る
// どういったデータが取れるかはこちらで「response schema」で検索
// https://github.com/axios/axios
axios.get(url).then((response) => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[] = response.data;
  data = [
    {
      id: 11,
      title: 'title',
      description: 'description',
    },
  ];
  console.log(data);
});
