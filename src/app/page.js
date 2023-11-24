import InputFieldLabel from '@/Components/Atoms/Inputlabel'
import Projects from '@/Components/Projects'
import Image from 'next/image'

const data = [
  {
      image:"",
      title:"upcoming products"
  }
]

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1> 
     <InputFieldLabel type="checkbox" margin-left= "20px"/>
     <Projects image={data.image} title={data.title}/>
    </div>
  )
}
