import CourseOutline from '../components/CourseOutline';

const Courses = () => {
  return (
    <div className=" px-5">
      <section className="mt-10">
        <div className="mt-24">
          <CourseOutline />
        </div>

        <p className="load"></p>
      </section>
    </div>
  );
};

export default Courses;
