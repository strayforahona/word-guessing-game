import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source word guessing game -{' '}
        <a
          href="https://github.com/strayforahona/word-guessing-game"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}

        For any queries, contact -{' '}
        <j
          href="https://twitter.com/felixired"
          className="underline font-bold"
        >
          @felixired
        </j>{' '}
      </p>
    </BaseModal>
  )
}
