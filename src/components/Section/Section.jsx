import PropTypes from "prop-types";
import { SectionTitles } from "./Section.styled";

export const Section = ({title, children}) => {
    return(
        <SectionTitles>
            <h2>{title}</h2>
            {children}
        </SectionTitles>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}