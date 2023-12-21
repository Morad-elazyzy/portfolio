import Link from "next/link";
function Categories() {
  return (
    <section className="container px-4 my-24 mx-auto grid gap-16 grid-col-1 sm:grid-cols-2 md:grid-cols-3">
      <Link href="/design">
        <div className="flex flex-col gap-2">
          <img
            className="max-w-80 h-96"
            src="https://i.ibb.co/qkt4tCx/609acf3b7a299c11d4b136c9-ui-ux-design-tools.jpg"
            alt="alt"
          />
          <h3 className="text-fuchsia-800 text-2xl">
            <Link href="/design">Design</Link>
          </h3>
          <p className="text-lg text-gray-600">
            deep knowledge of ux/ui fundamentals and advanced design concepts
            such as(sketching, wireframing, prototyping...).
          </p>
        </div>
      </Link>
      <Link href="/design">
        <div className="flex flex-col gap-4">
          <img
            className="w-100 h-96"
            src="https://i.ibb.co/99QrJyw/frontend-security-vulnerabilities-min.jpg"
            alt="alt"
          />
          <h3 className="text-fuchsia-800 text-2xl">
            <Link href="/design">Front End</Link>
          </h3>
          <p className="text-lg text-gray-600">
            solid front end fundamentals(html, css, sass, boostrab, wordpress,
            react...) ,most of my projects build with react but i can work with
            other frameworks as well.
          </p>
        </div>
      </Link>
      <Link href="/design">
        <div className="flex flex-col gap-4">
          <img
            className="max-w-80 h-96"
            src="https://i.ibb.co/H7MfbKk/how-to-start-a-blog.png"
            alt="alt"
          />
          <h3 className="text-fuchsia-800 text-2xl font-medium">
            <Link href="/design">Blogs</Link>
          </h3>
          <p className="text-lg text-gray-600">
            love sharing my knowledge with the community and here is few blogs
            where i talk about code and design.
          </p>
        </div>
      </Link>
    </section>
  );
}

export default Categories;
