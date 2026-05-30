import { motion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

// Elemento único que aparece ao entrar na viewport
export default function FadeIn({
    children,
    delay = 0,
    y = 28,
    duration = 0.6,
    className = '',
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration, delay, ease }}
        >
            {children}
        </motion.div>
    )
}

// Container que escalonados os filhos em sequência
export function FadeInStagger({ children, stagger = 0.08, className = '' }) {
    return (
        <motion.div
            className={className}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
        >
            {children}
        </motion.div>
    )
}

// Item filho para usar dentro de FadeInStagger
export function FadeInItem({ children, className = '', y = 20 }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden:  { opacity: 0, y },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
        >
            {children}
        </motion.div>
    )
}
