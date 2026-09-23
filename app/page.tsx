

export default function HomePage()
{
    return(
        <div>
            <h1 className="text-3xl"> Webshop Home page </h1>
            <br/>
            <a href="/product/[id]" className="underline"> Go to product details page </a>
            <br/>
            <a href="/cart" className="underline"> Go to Cart page </a>
            <br/>
            <a href="/admin" className="underline"> Go to Admin page </a>
        </div>
    );
}