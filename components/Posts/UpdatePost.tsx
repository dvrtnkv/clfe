interface IPostData {
	title?: string;
	content?: string;
	userId: number;
	image?: string;
}
const updatePost = (data: IPostData) => {
	return <h1>Обновить статью</h1>;
};

export default updatePost;
