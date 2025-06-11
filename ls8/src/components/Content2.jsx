import React, { useState, useEffect, useRef } from "react";

const Content2 = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const isMounted = useRef(false);


    useEffect(() => {
        console.log("Content2 змонтована");

        return () => {
            console.log("Content2 демонтується");
        };
    }, []);


    useEffect(() => {
        if (isMounted.current) {
            console.log(`count змінився: ${count}`);
        } else {
            isMounted.current = true;
        }
    }, [count]);


    useEffect(() => {
        console.log(`text змінився: ${text}`);
    }, [text]);


    useEffect(() => {
        document.title = `Count: ${count}, Text length: ${text.length}`;
    });

    return (
        <section
        style={{ border: "1px solid blue", padding: 10, marginBottom: 10 }}
        >
        <h4>Content2 з useEffect</h4>
        <button onClick={() => setCount((c) => c + 1)}>Збільшити count ({count})</button>
        <br />
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть текст"
        style={{ marginTop: 10 }}
        />
        </section>
    );
};

export default Content2;
