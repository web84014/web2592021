<?php

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
namespace Google\Site_Kit_Dependencies\Google\Service\Ideahub\Resource;

use Google\Site_Kit_Dependencies\Google\Service\Ideahub\GoogleSearchIdeahubV1alphaIdeaState;
/**
 * The "ideaStates" collection of methods.
 * Typical usage is:
 *  <code>
 *   $ideahubService = new Google\Service\Ideahub(...);
 *   $ideaStates = $ideahubService->ideaStates;
 *  </code>
 */
class PlatformsPropertiesIdeaStates extends \Google\Site_Kit_Dependencies\Google\Service\Resource
{
    /**
     * Update an idea state resource. (ideaStates.patch)
     *
     * @param string $name Unique identifier for the idea state. Format:
     * platforms/{platform}/properties/{property}/ideaStates/{idea_state}
     * @param GoogleSearchIdeahubV1alphaIdeaState $postBody
     * @param array $optParams Optional parameters.
     *
     * @opt_param string updateMask The list of fields to be updated.
     * @return GoogleSearchIdeahubV1alphaIdeaState
     */
    public function patch($name, \Google\Site_Kit_Dependencies\Google\Service\Ideahub\GoogleSearchIdeahubV1alphaIdeaState $postBody, $optParams = [])
    {
        $params = ['name' => $name, 'postBody' => $postBody];
        $params = \array_merge($params, $optParams);
        return $this->call('patch', [$params], \Google\Site_Kit_Dependencies\Google\Service\Ideahub\GoogleSearchIdeahubV1alphaIdeaState::class);
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\Ideahub\Resource\PlatformsPropertiesIdeaStates::class, 'Google\\Site_Kit_Dependencies\\Google_Service_Ideahub_Resource_PlatformsPropertiesIdeaStates');
