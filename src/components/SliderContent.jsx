import { MaxContent } from './SliderContentCSS'

const SliderContent = (props) => (
  <MaxContent className="SliderContent" props ={props} translate={props.translate} transition={props.transition} width={props.width}>
  {props.children}
  </MaxContent>
  )

export default SliderContent
