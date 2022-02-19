export const SignupCard = () => {
  return (
    <div>
      <div className="bg-dark">
        <div className="d-flex flex-column flex-md-row p-2 justify-content-center align-items-center">
          <div className="text-light  text-center mx-md-3">
            Over <span className="fw-bold">200</span> resources publised. Create
            publisher account.
          </div>
          <a
            className="btn btn-danger mt-2 mt-md-0"
            href="https://app.mypapers.shop/profile"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};
