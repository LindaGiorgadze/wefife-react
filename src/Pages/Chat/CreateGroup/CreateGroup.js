import './CreateGroup.css';

export default function CreateGroup() {
    return (
        <section className='CreateGroup'>
            <form className='GroupForm' onSubmit={(e) => e.preventDefault()}>
                <h3 className='CreateTitle'>Create Your Group</h3>
                <input className='GroupName' type='text' id='groupName' placeholder='Group Name' />
                <textarea className='GroupDescription' id='groupDescription' placeholder='Description'/>
                <button type='submit' className='GroupBtn'>Create</button>
            </form>
            <h1 className='BrandName'>WEFIFE</h1>
        </section>
    )
}