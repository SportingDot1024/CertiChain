import Beam from "../../components/beam/beam";
import Loader from "../../components/loader/loader";
import "./home.css"


export default function Home(){
    return (
      <>
        <div className="container">
          <div className="lander">
            <div className="half">
              <p className="title">Create, Store and Validate</p>
              <p className="sub">
                Discover the future of certification with CertiChain, a
                cutting-edge platform powered by blockchain technology
              </p>
              <a href="/dashboard/Status" className="btn">
                Generate Certificate
              </a>
            </div>
            <Beam />
            <div className="scrollbar">
              Secure . Fast . Blockchain powered . Verified Certificates . Vault
              system . Secure . Fast . Blockchain powered . Verified
              Certificates . Vault system  . Secure . Fast .
              Blockchain powered . Verified Certificates
            </div>
          </div>
          <div className="lander">
            <Beam />
          </div>
        </div>
      </>
    );
}