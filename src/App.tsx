import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import Donate from "./pages/donation";
import Signup from "./pages/signUp";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import Admin from "./pages/admin";
import AddEditEvent from "./pages/addevent";
import Events from "./pages/events";
import EventDetails from "./pages/eventdetail";
import Gallery from "./pages/gallery";
import ThankYou from "./pages/thankyou";
import SubmitDataForm from "./pages/form";
import ViewData from "./pages/data";
import ViewContacts from "./pages/contacts";
import UploadImage from "./pages/addgalleryimages";
import AddNotice from "./pages/notices";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/thanks" element={<ThankYou />} />
          <Route path="/programs" element={<Events />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-event"
            element={
              <PrivateRoute>
                <AddEditEvent />
              </PrivateRoute>
            }
          />
          <Route path="/add-image" element={<UploadImage />} />
          <Route path="/event-details/:id" element={<EventDetails />} />
          <Route path="/messages" element={<ViewContacts />} />
          <Route path="/add-notice" element={<AddNotice />} />

          <Route path="/form" element={<SubmitDataForm />} />
          <Route path="/data" element={<ViewData />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
