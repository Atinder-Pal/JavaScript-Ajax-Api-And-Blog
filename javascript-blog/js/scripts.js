//alert("Script has loaded!");

const listOfBlogPosts = document.getElementById('list-of-blogposts');

class Article
{
    constructor(title = "", content ="")
    {        
        this.title = title;
        this.content = content;
    }

    outputArticle()
    {
        const blogPost = document.createElement( 'LI' );
        //Creating H2 element for Title and initialise it with title and appending to body
        const titleAsH2 = document.createElement( 'H2' );
        titleAsH2.textContent = `${this.title}  `;
        
        const start = document.createElement(  'SPAN' );
        start.classList.add("blog-creation-datetime");
        //Citation
        //Took hep from 'Adolf Stary' for understanding how to pull date and display it in string
        let blogCreateDate = new Date().toLocaleDateString();
        let blogCreateTime = new Date().toLocaleTimeString();
        start.textContent =  " Created: " + blogCreateDate + " " + blogCreateTime+ "  ";
        //End Citation
        
        //Create Delete button
        //Citation
        //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_create    
        let deleteButton = document.createElement("BUTTON");
        let buttonText = document.createTextNode("Delete");
        deleteButton.appendChild(buttonText);        

        //Create Edit Button
        let editButton = document.createElement("BUTTON");
        let editButtonText = document.createTextNode("Edit Blog");
        editButton.appendChild(editButtonText);

        let saveButton = document.createElement("BUTTON");
        let saveButtonText = document.createTextNode("Save Changes");
        saveButton.appendChild(saveButtonText);
        blogPost.appendChild(saveButton);

        //Add Event listener to Save Changes Button
        saveButton.addEventListener('click', (event) =>{
        event.preventDefault();        
        blogPost.contentEditable = false;
        });
        //End Citation

        titleAsH2.appendChild(start);
        titleAsH2.appendChild(deleteButton);
        titleAsH2.appendChild(editButton);
        titleAsH2.appendChild(saveButton);

        blogPost.appendChild( titleAsH2 );

        //Creating <p> element for Content and initialise it with content and appending to body
        const contentAsParagraph = document.createElement( 'P' );
        contentAsParagraph.textContent = `${this.content}`;   
        blogPost.appendChild( contentAsParagraph );
        
        //Add newly created li element to our list
        listOfBlogPosts.appendChild( blogPost );

        //Add Event listener to Delete Buttons
        deleteButton.addEventListener('click', (event) =>{
            event.preventDefault();        
            blogPost.remove(); 
        });

        //Add Event listener to Edit Blog Buttons
        editButton.addEventListener('click', (event) =>{
            event.preventDefault();        
            blogPost.contentEditable = true;             
        });        
    }
}
//Created an Array t0 store all blogposts
const articleArray = [];

const blogPost1 = new Article(
    "HTML5",
    "HyperText Markup Language (version 5.)"
)

const blogPost2 = new Article(
    "CSS3",
    "Cascading StyleSheets (version 3.)"
)

const blogPost3 = new Article(
    "Bootstrap",
    "Bootstrap is a CSS framework, offering you a cornucopia of pre-set classes and styles out-of-the-box."
)

const blogPost4 = new Article(
    "Foundation",
    "Foundation is a CSS framework, offering you a cornucopia of pre-set classes and styles out-of-the-box."
)

const blogPost5 = new Article(
    "JavaScript",
    "Used for functionality, and handling of interactivity, in the front-end of websites."
)

const blogPost6 = new Article(
    "ECMAScript 6",
    "A specific version of JavaScript that introduces new features like \"class\" arrow-style function." 
)

articleArray.push(blogPost1);
articleArray.push(blogPost2);
articleArray.push(blogPost3);
articleArray.push(blogPost4);
articleArray.push(blogPost5);
articleArray.push(blogPost6);

//display all the blogposts in the array on the webpage
for( const articleObject of articleArray )
{
    articleObject.outputArticle();
}



//Grab the form
const submitNewBlogForm = document.getElementById('submit-new-blogpost-form');
console.log(submitNewBlogForm);

//Grab the Title
const titleBlogPost = document.getElementById('title-of-blogpost');
console.log(titleBlogPost);

//Grab the Content
const contentBlogPost = document.getElementById('content-of-blogpost');
console.log(contentBlogPost);

//Add Event Listener to Form Submit 
submitNewBlogForm.addEventListener( 'submit', (event) => {
    event.preventDefault();
    const newTitle = titleBlogPost.value;
    const newContent = contentBlogPost.value;

    //Everytime user submits the form- the input fields should get clear
    titleBlogPost.value = "";
    contentBlogPost.value= "";

    //Create new object of Article class with Input from user
    let newArticle = new Article(
        this.title= newTitle,
        this.content = newContent
    )
    //Push Article in the array
    articleArray.push(newArticle);  

   //Display newly submitted blogpost on page
    newArticle.outputArticle(); 
     
});








