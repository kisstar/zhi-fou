function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface PostInfo {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export const columnList: ColumnProps[] = Array(5)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: `test${index + 1}的标题`,
    avatar: index + 1 === 3 ? "" : "http://www.dmoe.cc/random.php",
    description: `这是test${index +
      1}的专栏，有一段非常有意思的简介，欢迎阅读和编辑哦`
  }));

export const postList: PostInfo[] = Array(15)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: `这是我的第${index + 1}篇文章`,
    image: index + 1 === 3 ? "" : "http://www.dmoe.cc/random.php",
    content: `这是我专栏里的第${index +
      1}篇文章，其中包含许多有意思的内容，欢迎经常来阅读哦`,
    createdAt: "2020-11-03 12:32:09",
    columnId: getRndInteger(1, 5)
  }));
