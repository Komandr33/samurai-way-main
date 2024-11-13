import {widthAuthRedirect} from '../../../common/HOC/widthAuthRedirect';


const Friends = () => {
  return (
    <div>
      Friends
    </div>
  )
}

export const FriendsContainer = widthAuthRedirect(Friends);