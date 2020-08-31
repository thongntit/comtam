import TabGrid from "components/cards/TabCardGrid.js";
import Features from "components/features/ThreeColSimple.js";
import Footer from "components/footers/MiniCenteredFooter";
import Hero from "components/hero/TwoColumnWithVideo.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import React from "react";
import tw from "twin.macro";
import { mainDish, additionalDish } from "constants/menu";
import { services } from "constants/services";

export default () => {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            <HighlightedText>Cơm tấm MK</HighlightedText>
            <br />
            Ngọt ngào hạt tấm
          </>
        }
        description="Ngọt Ngào Hạt Tấm Việt - Bữa ăn sạch, dinh dưỡng cao, trong không gian lịch sự trang nhã là phương châm hướng tới của Cơm Tấm MK"
        imageSrc="https://top247.vn/wp-content/uploads/2020/05/top-5-hang-com-tam-ngon-nhat-tai-quan-1-tphcm-1.jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Đặt hàng ngay"
        watchVideoButtonText="Tìm hiểu thêm"
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            <HighlightedText>Menu</HighlightedText> hôm nay
          </>
        }
        tabs={{
          "Món chính": mainDish,
          "Món ăn kèm": additionalDish,
        }}
      />
      <Features
        heading={
          <>
            <HighlightedText>Dịch vụ</HighlightedText> tiện lợi.
          </>
        }
        cards={services}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
