import Post from "@/components/post/Post";

export default function Feed() {
return (
    <main className="grid justify-center">
        <div className="text-center">
        <p className="text-3xl my-10 font-bold">Feed</p>
        </div>
      <Post />
    </main>
    );
}