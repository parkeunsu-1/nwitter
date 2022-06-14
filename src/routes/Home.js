import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";


const Home = ({userObj}) => {


    const [nweets, setNweets ] =useState([]);


//    const getNweets = async () => {
//        const dbNweets = await dbService.collection("nweets").get();
//        dbNweets.forEach((document) => {
//            const nweetObject = { ...document.data(), id : document.id };
//            setNweets((prev)=> [nweetObject, ...prev])
//        });
//    };
    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot)=> {
            const newArray = snapshot.docs.map((document)=>({
                id : document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
//        getNweets();
    }, []);


    return (
        <>
        <NweetFactory userObj={userObj} />
        <div>
            {nweets.map((nweet)=>(
//                <div key ={nweet.id}>
//                    <h4>{nweet.text}</h4>
//                </div>
                <Nweet key={nweet.id}
                    nweetObj={nweet}
                    isOwner = {nweet.creatorId === userObj.uid}
                    />
        ))}
        </div>
    </>
    );
};
//<span>Home</span>;
export default Home;