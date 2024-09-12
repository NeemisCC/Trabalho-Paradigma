const Content = () => {
    return (
        <div className="relative top-10 w-2/3 mx-auto text-justify">
            It’s so good. It captures exactly how I feel about async and await. If you wait for async code your function now has to be async as well. And if there’s any function relying on that function that code also has to be async and on and on and on. Until you reach the top level.

            I’ve always hated this. But there’s no better way to do this. It’s a necessary evil. Right..? Well, I’ve recently been coding a lot in Go. And Go does not have async and await. And this is despite it being famous for its concurrency. And you know what? I really like it.

            So the first time I realized that Go did not have async/await was when I wanted to get my function to wait one second. This is because I make an RSS reader Stratum (iOS, Android) that fetches a lot of RSS feeds. And it turns out sites don’t like it if you spam their site with requests. They will rate limit you. So I decided to add a one second delay between requests. How do you do this? It’s as simple as:
        </div>
    )
}

export default Content