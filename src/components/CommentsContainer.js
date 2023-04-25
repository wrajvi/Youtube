
const commentsData=[
    {
        name:"Rajeev",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reply:[
            {
                name:"Rajeev",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                reply:[
                    {
                        name:"Rajeev",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        reply:[]
                    },
                    {
                        name:"Rajeev",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        reply:[]
                    },
                    {
                        name:"Rajeev",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        reply:[]
                    },
                ]
            },
            {
                name:"Rajeev",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                reply:[
                    {
                        name:"Rajeev",
                        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        reply:[]
                    },
                ]
            },
            {
                name:"Rajeev",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                reply:[{
                    name:"Rajeev",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    reply:[]
                },]
            },
            {
                name:"Rajeev",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                reply:[]
            },
        ]
    },
    {
        name:"Rajeev",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reply:[
            {
                name:"Rajeev",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                reply:[{
                    name:"Rajeev",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    reply:[]
                },
                {
                    name:"Rajeev",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    reply:[]
                },
                {
                    name:"Rajeev",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    reply:[]
                },
                {
                    name:"Rajeev",
                    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    reply:[]
                },
                ]
            },
            {
                name:"Rajeev",
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                reply:[]
            },
        ]
    },
    {
        name:"Rajeev",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reply:[]
    },
    {
        name:"Rajeev",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reply:[]
    },
    {
        name:"Rajeev",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reply:[]
    },
    {
        name:"Rajeev",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        reply:[]
    }
];

const Comment=({data})=>{
    const {name,text,reply}=data;
    return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
    <img className="w-12 h-12" alt="img" src="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
    </div>
    );
};


const CommentsList=({comments}) =>{
    console.log(comments);
      return comments.map((comment,index)=>(
       <div> 
       <Comment key={index} data={comment}/>
       <div className="ml-5 pl-5 border border-l-black">
       <CommentsList comments={comment.reply}/>
       </div>
       </div>)
       );
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
    <h1 className="text-2xl font-bold">Comments</h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer