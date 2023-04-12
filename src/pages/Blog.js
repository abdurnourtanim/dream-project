import React from "react";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-24 mt-16 bg-gray-100 dark:bg-gray-900  py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white">
            Latest from our Blog
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <BlogCard
                primary
                image="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                author="Bruce Wayne"
                date="13TH Oct, 2020"
                title="Transactions"
                description={`Find the latest events updates or create events, concerts,conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops,exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.`}
              />
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
                  <BlogCard
                    image="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                    author="Bruce Wayne"
                    date="13TH Oct, 2020"
                    title="Transactions"
                    description={`Find the latest events updates or create events, concerts,conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops,exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.`}
                  />
                  <BlogCard
                    image="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                    author="Bruce Wayne"
                    date="13TH Oct, 2020"
                    title="Transactions"
                    description={`Find the latest events updates or create events, concerts,conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops,exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.`}
                  />
                </div>
                <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
                  <BlogCard
                    image="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                    author="Bruce Wayne"
                    date="13TH Oct, 2020"
                    title="Transactions"
                    description={`Find the latest events updates or create events, concerts,conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops,exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.`}
                  />
                  <BlogCard
                    image="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
                    author="Bruce Wayne"
                    date="13TH Oct, 2020"
                    title="Transactions"
                    description={`Find the latest events updates or create events, concerts,conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops,exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.`}
                  />
                </div>
                <Button className="px-5 py-2 mt-5 ml-auto">See more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
