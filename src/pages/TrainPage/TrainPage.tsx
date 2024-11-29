import {
  Header,
  SearchBlock,
  Footer,
  StepsBar,
} from "../../components";
import banner2 from "../../assets/images/second-banner.png";

export const TrainPage = () => {
  return (
    <>
      <Header 
      background={banner2} 
      children={<SearchBlock 
        style={{
        flexDirection: "row",
        margin: "111px auto 0",
        justifyContent: "space-between",
        padding: "28px 40px 0px", 
        flexWrap: "wrap",
        width: "77%",
        }}
        styleBtn={{
         justifyContent: "start",
        }
        }
        />} />
      <StepsBar currentStep={1} />
      <aside>

      </aside>
      <main>
        
      </main>
      <Footer />
    </>
  );
};
