import { motion } from "motion/react";
import { styles } from "../styles";

const AboutMe = () => {
return (
        <>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >ashdjahsjdh
      asdasjdhjjashd
      ashdkasjfkj
      asjdjakjd
      askajkwjek
      asjfhjhwjkek
        
      </motion.p>
    </>
    )


}
    


export default AboutMe;