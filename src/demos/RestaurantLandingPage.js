import TabGrid from "components/cards/TabCardGrid.js";
import Features from "components/features/ThreeColSimple.js";
import Footer from "components/footers/MiniCenteredFooter";
import Hero from "components/hero/TwoColumnWithVideo.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import chefIconImageSrc from "images/chef-icon.svg";
import freeDeliveryImageSrc from "images/free-delivery.svg";
import React from "react";
import tw from "twin.macro";


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<><HighlightedText>Cơm tấm MK</HighlightedText><br />Ngọt ngào hạt tấm</>}
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
        tabs={
          {
            "Món chính": [
            {
              imageSrc:
                "https://beptruong.edu.vn/wp-content/uploads/2018/04/ke-hoach-kinh-doanh-com-tam.jpg",
              title: "Sườn bì chả",
              content: "Cơm tấm sườn bì chả",
              price: "38.000 VNĐ",
              rating: "5.0",
              reviews: "87",
              url: "#"
            },
            {
              imageSrc:
                "https://beptruong.edu.vn/wp-content/uploads/2018/06/cach-uop-thit-nuong-com-tam.jpg",
              title: "Sườn",
              content: "Cơm tấm sườn",
              price: "30.000 VNĐ",
              rating: "5.0",
              reviews: "87",
              url: "#"
            },
            {
              imageSrc:
                "https://f.imgs.vietnamnet.vn/2017/12/12/15/khoi-mat-cong-ra-quan-vi-cong-thuc-com-tam-chuan-vi-nhat-ngay-day.jpg",
              title: "Sườn trứng",
              content: "Cơm tấm sườn trứng",
              price: "30.000 VNĐ",
              rating: "5.0",
              reviews: "87",
              url: "#"
            },
            
          ],
          "Món ăn kèm": [
            {
              imageSrc:
                "https://monngonchuabenh.com/wp-content/uploads/2019/01/canh-cai-cuc-thit-bam-thom-ngon.jpg",
              title: "Canh",
              content: "Canh ăn kèm",
              price: "5.000 VNĐ",
              rating: "5.0",
              reviews: "87",
              url: "#"
            },
            {
              imageSrc:
                "https://tubikitchen.com/wp-content/uploads/2019/01/do-chua-001.jpg",
              title: "Đồ chua",
              content: "Đồ chua ăn kèm",
              price: "5.000 VNĐ",
              rating: "5.0",
              reviews: "87",
              url: "#"
            },
            {
              imageSrc:
                "https://chevang.com.vn/wp-content/uploads/2019/10/dua-chu%E1%BB%99t.jpg",
              title: "Dưa leo",
              content: "Dưa leo ăn kèm",
              price: "5.000 VNĐ",
              rating: "5.0",
              reviews: "87",
              url: "#"
            } 
          ]
        }
        }
      />
      <Features
        heading={
          <>
            <HighlightedText>Dịch vụ</HighlightedText> tiện lợi.
          </>
        }
        cards={[
          {
            imageSrc: freeDeliveryImageSrc,
            title: "Miễn phí giao hàng",
            description: "Cho đơn hàng từ 2 phần trở lên",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Đầu bếp có tâm",
            description: "10+ năm kinh nghiệm phụ vụ cơm tấm",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Hậu mãi dài lâu",
            description: "Dịch vụ hỗ trợ sau bán hàng hàng đầu",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
