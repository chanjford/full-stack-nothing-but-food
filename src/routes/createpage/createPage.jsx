import './createPage.css'

const CreatePage = () => {

    return (
        <div className="createtPage"> 
            <div className="createTop">
                <h1>Create Pin</h1>
                <button>Publish</button>
            </div>
            <div className="createBottom">
                <div className="upload">
                    <div className="uploadTitle">
                        <img src="/general/upload.svg" alt="" />
                        <span>Choose a file</span>
                    </div>
                    <div className="uploadInfo">
                        We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200MB.
                    </div>
                </div>
                <form action="" className='createForm'>
                    <div className="createFormItem">
                        <label htmlFor="title">Title</label>
                        <input 
                        type="text" 
                        placeholder='Add a title' 
                        name='title'
                        id='title' 
                        />
                    </div>
                    <div className="createFormItem">
                        <label htmlFor="description">Description</label>
                        <textarea
                        rows={6} 
                        type="text" 
                        placeholder='Add a detailed description' 
                        name='description'
                        id='description' 
                        />
                    </div>
                    <div className="createFormItem">
                        <label htmlFor="link">Link</label>
                        <input 
                        type="text" 
                        placeholder='Add a link' 
                        name='link'
                        id='link' 
                        />
                    </div>
                    <div className="createFormItem">
                        <label htmlFor="">Board</label>
                        <select name='title' id='title' >
                            <option>Choose a board</option>
                            <option value="1">Board 1</option>
                            <option value="2">Board 2</option>
                            <option value="3">Board 3</option>
                        </select>
                    </div>
                     <div className="createFormItem">
                        <label htmlFor="tags">Tagged topics</label>
                        <input 
                        type="text" 
                        placeholder='Add a tag' 
                        name='tag'
                        id='tag' 
                        />
                        <small>Don't worry, people won't see your tags</small>
                    </div>
                </form>
            </div>
            </div>
        
    )
}

export default CreatePage