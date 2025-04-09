import MainLayouts from "./Layouts/MainLayouts";
import Homepage from "./pages/Homepage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import NotFoundPages from "./pages/NotFoundPages";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditjobPage from "./pages/EditjobPage";

function App() {
  //Add job
  const addjob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  //update job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/addjobs" element={<AddJobPage addjobSubmit={addjob} />} />
        <Route path="*" element={<NotFoundPages />} />
        <Route
          path="/edit-job/:id"
          element={<EditjobPage updatejobSubmit={updateJob} />}
          loader={jobLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
