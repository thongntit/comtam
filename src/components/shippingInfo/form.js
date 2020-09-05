import React, { useState } from "react";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
import { useStepsDispatchState, actions } from "contexts/steps";
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Form = tw.form`w-full mt-12`;
const FieldContainer = tw.div`flex w-full`;
const Field = tw.div`w-full px-3 mb-6`;
const Label = tw.label`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`;
const Input = tw.input`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500`;
const InputError = tw.input`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`;
const ErrorText = tw.p`text-red-500 text-xs italic`;
const HiddenBtn = tw.button`hidden`;
const ShippingInfo = () => {
  const [phoneError, setPhoneError] = useState(false);
  const dispatch = useStepsDispatchState();
  const submitBtn = (event) => {
    event.preventDefault();
    let pError = false;
    if (event.target.phone.value.length !== 10) {
      pError = true;
    }
    const phoneErrorElm = document.getElementById("phone-error");
    if (phoneErrorElm)
      phoneErrorElm.innerHTML = pError
        ? "Vui lòng kiểm tra lại số điện thoại!"
        : "";
    if (!pError) {
      dispatch({
        type: actions.nextStep,
      });
    }
    setPhoneError(pError);
  };
  return (
    <>
      <Heading>
        <HighlightedText>Địa chỉ</HighlightedText> giao hàng
      </Heading>
      <Form onSubmit={submitBtn}>
        <FieldContainer>
          <Field>
            <Label>Tên người mua</Label>
            <Input id="name" type="text" placeholder="Tên người mua" />
          </Field>
          <Field>
            <Label>Số điện thoại</Label>
            {phoneError ? (
              <InputError
                id="phone"
                type="number"
                placeholder="Số điện thoại"
              />
            ) : (
              <Input id="phone" type="number" placeholder="Số điện thoại" />
            )}
            <ErrorText id="phone-error"></ErrorText>
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
          <HiddenBtn type="submit" id="shipping-submit-btn" />
        </FieldContainer>
      </Form>
    </>
  );
};
export default ShippingInfo;
