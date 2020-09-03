import React from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Form = tw.form`w-full mt-12`;
const FieldContainer = tw.div`flex w-full`;
const Field = tw.div`w-full px-3 mb-6`;
const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const Input = tw.input`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500`;
const ShippingInfo = () => {
  return (
    <>
      <Heading>
        <HighlightedText>Địa chỉ</HighlightedText> giao hàng
      </Heading>
      <Form>
        <FieldContainer>
          <Field>
            <Label>Tên người mua</Label>
            <Input id="name" type="text" placeholder="Tên người mua" />
          </Field>
          <Field>
            <Label>Số điện thoại</Label>
            <Input id="phone" type="number" placeholder="Số điện thoại" />
          </Field>
        </FieldContainer>
        <FieldContainer>
          <Field>
            <Label>Địa chỉ</Label>
            <Input id="address" type="text" placeholder="Địa chỉ" />
          </Field>
        </FieldContainer>
        <FieldContainer>
          <Field>
            <Label>Ghi chú</Label>
            <Input id="address" type="text" placeholder="Ghi chú cho shipper" />
          </Field>
        </FieldContainer>
        <FieldContainer>
        </FieldContainer>
      </Form>
    </>
  );
};
export default ShippingInfo;
