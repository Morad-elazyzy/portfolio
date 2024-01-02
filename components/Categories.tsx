import Link from "next/link";
import { redirect } from "next/navigation";
function Categories() {
  return (
    <section className="container px-4 my-24 mx-auto grid gap-16 grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      <div>
        <Link href="/design">
          <img
            className="max-w-80 h-96"
            src="https://i.ibb.co/qkt4tCx/609acf3b7a299c11d4b136c9-ui-ux-design-tools.jpg"
            alt="alt"
          />
          <h3 className="text-fuchsia-800 text-2xl mt-4 mb-2 font-semibold ">
            Design
          </h3>
          <p className="text-lg text-gray-600">
            deep knowledge of ux/ui fundamentals and advanced design concepts
            such as(sketching, wireframing, prototyping...).
          </p>
        </Link>
      </div>

      <div>
        <Link href="front-end">
          <img
            className="w-100 h-96"
            src="https://i.ibb.co/99QrJyw/frontend-security-vulnerabilities-min.jpg"
            alt="alt"
          />
          <h3 className="text-fuchsia-800 text-2xl font-semibold mt-4 mb-2">
            Front End
          </h3>
          <p className="text-lg text-gray-600">
            solid front end fundamentals(html, css, sass, css tailwind, next
            js...) ,most of my projects build with react but i can work with
            other frameworks as well.
          </p>
        </Link>
      </div>

      <div>
        <Link href="/blogs">
          <img
            className="max-w-80 h-96"
            src="https://i.ibb.co/H7MfbKk/how-to-start-a-blog.png"
            alt="alt"
          />
          <h3 className="text-fuchsia-800 text-2xl font-semibold mt-4 mb-2">
            Blogs
          </h3>
          <p className="text-lg text-gray-600">
            love sharing my knowledge with the community and here is few blogs
            where i talk about code and design.
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Categories;
