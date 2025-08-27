import '../styles/Blog.css';
export default function Blog() {

return (
    <div className="blog-page">

    <div className="BlogHeader">
    <h1 className="BlogTitle"> Blog</h1>
        <button className="PostButton" type="button">Post</button>
    </div>
    
    <div className="blog-content">

    {/* main posts */}

    <div className="mainPosts">
        <article className="blog-post">
            <h2 className="post-title">How to make Spaget</h2>
            <img className="blogImg" 
            src="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg" 
            alt="Spagetti Picture"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel magni blanditiis sunt! In atque consequatur eveniet reprehenderit commodi amet adipisci tempore neque beatae ut accusantium consectetur eaque, laborum sed.</p>
        </article>

        <article className="blog-post">
        <h2 className="post-title">How to make Boa Buns</h2>
        <img className="blogImg" src="https://breadtopia.com/wp-content/uploads/2022/09/20220831_132221-800x600.jpg" alt="Boa Buns"></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum culpa harum quidem, totam dicta consequuntur vel alias, fugit blanditiis cum deleniti praesentium. Optio fugiat vero obcaecati eligendi minus esse numquam.</p>
        </article>
    </div>

    {/* side bar content */}

   <div className='sidebar'>
    <h3>Recent Posts</h3>
    <ul>
        <li>Alec's Recipie</li>
        <li>Draysen's Recipie</li>
        <li>Nikki's Recipie</li>
        <li>Fernando's Recipie</li>
        <li>Micha's Cake Recipie</li>
        <li>Taco Recipie</li>
    </ul>
    </div>

    </div>
</div>
);
}