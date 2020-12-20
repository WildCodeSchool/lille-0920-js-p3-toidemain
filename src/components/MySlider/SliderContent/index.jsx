import { MaxContent } from './style'

const SliderContent = (props) => (
  <MaxContent className="SliderContent" translate={props.translate} transition={props.transition} width={props.width}>
  {props.children}
  </MaxContent>
  )

export default SliderContent
