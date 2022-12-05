interface INewPost {
	title: string;
	content: string;
	userId: number;
	image: string;
}
const newPost = (data: INewPost) => {
	return <h1>Новая статья</h1>;
};

export default newPost;
