import Counter from "./Counter";

export default function Content() {
    const data = {
        title: 'Title',
        describe: 'Describe',
    };

    return (
        <div>
            <h1>
                {data.title}
            </h1>
            <p>
                {data.describe}
            </p>
            <Counter/> 
            
        </div>
    );
}