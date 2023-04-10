import React from "react";

const ProfileOverlay = () => {
  return (
    <section className="relative  block min-h-[450px] md:min-h-[500px]">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
        }}
      ></div>
    </section>
  );
};

export default ProfileOverlay;
