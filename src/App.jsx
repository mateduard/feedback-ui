import { useState } from "react"
import { v4 as uuidv4} from 'uuid'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        if(window.confirm('Surely delete?')){
            setFeedback (feedback.filter(item => item.id !== id));
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    } 

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={(id)=>deleteFeedback(id)}/>
            </div>
        </>
    )
}

export default App