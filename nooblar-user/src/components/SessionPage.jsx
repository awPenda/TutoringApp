import Icons from './Icons'



export default function SessionPage() {
    const Tutor = "MAchin";
    return(<>
        <h2>You are on a session with {Tutor}</h2>
        <a href="https://learn.microsoft.com/en-us/graph/api/application-post-onlinemeetings?view=graph-rest-1.0&tabs=http#permissions"> Teams api ressource </a>
        <a href="https://latitudetechnolabs.com/how-can-we-integrate-zoom-in-react-js/">or zoom</a>
    </>);
}