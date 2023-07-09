import { useContext, createContext } from "react"
import MobileDetect from "mobile-detect";
import { GetServerSidePropsContext } from "next";
import { useWindowSize } from "./useWindowSize";

export const IsSsrMobileContext = createContext(false);

export const getIsSsrMobile = (context: GetServerSidePropsContext) => {
    const md = new MobileDetect(context.req.headers["user-agent"] as string);

    return Boolean(md.mobile());
};

export const useIsMobile = () => {
    const isSsrMobile = useContext(IsSsrMobileContext);
    const { width: windowWidth } = useWindowSize();
    const isBrowserMobile = !!windowWidth && windowWidth < 992;
  
    return isSsrMobile || isBrowserMobile;
  };