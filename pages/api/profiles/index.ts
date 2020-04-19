import fakeProfiles from '../../../fake-profiles.json'

export default (req, res) => {
  res.status(200).json(fakeProfiles)
}
