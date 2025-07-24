import { PostModalProps } from "@/interfaces";
import { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({isOpen, onClose, onSubmit}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(title, content);
        setTitle(""); // Reset the title field afetr submission
        setContent(""); // Reset the Content field afetr submission
        onClose() // Close the modal after submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Create New Post</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium">Title</label>
                        <input 
                        id="title"
                        value={title}
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content">Content</label>
                        <input 
                        type="text" 
                        id="content"
                        value={content}
                        required
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal;